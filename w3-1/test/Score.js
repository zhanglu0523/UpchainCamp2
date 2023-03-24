const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

async function deployFixture() {

  const [student1, student2] = await ethers.getSigners();
  // console.log("student1:", student1);
  // console.log("student2:", student2);
  const Teacher = await ethers.getContractFactory("Teacher");
  const teacher = await Teacher.deploy();
  console.log("teacher:", teacher.address);

  const Score = await ethers.getContractFactory("Score");
  const score = await Score.deploy(teacher.address);

  console.log("score:", score.address);

  return { teacher, score, student1, student2 };
}

describe("Score", function () {
  it("老师正常打分", async function () {
    const { teacher, score, student1, student2 } = await loadFixture(deployFixture)


    await teacher.callSetScore(score.address, student1.address, 88)
    await teacher.callSetScore(score.address, student2.address, 99)
  })

  it("超过100分-InvalidScore", async function () {
    const { teacher, score, student1 } = await loadFixture(deployFixture)

    const tx = teacher.callSetScore(score.address, student1.address, 150)
    await expect(tx).revertedWithCustomError(score, "InvalidScore")

  })

  it("学生打分-NotTeacher", async function () {
    const { score, student1 } = await loadFixture(deployFixture)


    const tx = score.connect(student1).setStudentScore(student1.address, 100)
    await expect(tx).revertedWithCustomError(score, "NotTeacher")

  })

  it("查分", async function () {
    const { teacher, score, student1 } = await loadFixture(deployFixture)

    await teacher.callSetScore(score.address, student1.address, 88)
    const result = await score.connect(student1).getScore(student1.address)
    expect(result).eq(88)
  })
})