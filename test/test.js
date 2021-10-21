const chai = require('chai')
const expect = chai.expect;
const dietz = require('../index');

describe("dietz isNumeric()", () => {

    it("should return true for any number", () => {
        expect(dietz.isNumeric(39.32434)).to.be.true
    })

    it("should return true when the number is a string", () => {
        expect(dietz.isNumeric("79")).to.be.true
    })

    it("should return false for an array", () => {
        expect(dietz.isNumeric([0, 1])).to.be.false
    })

    it("should return false for any string", () => {
        expect(dietz.isNumeric("[0,1]")).to.be.false
    })

})

describe("dietz sum()", () => {

    it("should sum an array of ints", () => {
        expect(dietz.sum([1, 2, 3, 4]) === 10).to.be.true
    })

    it("should sum an array of floats", () => {
        expect(dietz.sum([1.1, 2.2, 3.3, 4.4]) === 11).to.be.true
    })

})

describe("dietz getModifiedDietz()", () => {

    it("should return the modified dietz return correctly when cash flows exist", () => {
        expect(dietz.getModifiedDietz(1000, 1200, [500, 0, -800, 0]) === 0.425531914893617).to.be.true
    })

    it("should return the modified dietz return correctly without cash flows", () => {
        expect(dietz.getModifiedDietz(1000, 1200) === 0.2).to.be.true
    })

})