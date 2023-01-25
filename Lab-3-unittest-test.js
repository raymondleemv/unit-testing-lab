//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========

/** test__checkHumbrId Function
 * Tests the checkHumbrId() function which validate input as a Humber College Student number.
 * Returns true if the test case passes
 * @param {string} idIn
 * @param {boolean} expected
 */

function test__checkHumbrId(idIn, expected) {
  return checkHumbrId(idIn) === expected;
};

function createTestCase(idIn, expected) {
  return {
    idIn: idIn,
    expected: expected
  };
};

(function printResult() {
  let data = "";
  const testCases = [];

  // test-to-pass:
  testCases.push(createTestCase("n12345678", true));
  testCases.push(createTestCase("N12345678", true));
  // test-to-fail:
  testCases.push(createTestCase("abc123", false));
  testCases.push(createTestCase("abcn12345678", false));
  // boundary values:
  testCases.push(createTestCase("n1234567", false));
  testCases.push(createTestCase("n12345678", true));
  testCases.push(createTestCase("n123456789", false));
  testCases.push(createTestCase("12345678", false));
  testCases.push(createTestCase("n12345678", true));
  testCases.push(createTestCase("nn123456789", true));

  testCases.forEach(element => {
    let result = "";
    if (test__checkHumbrId(element.idIn, element.expected) === true) {
      result = "<span style=\"color: green\">==PASSED==</span>";
    } else {
      result = "<span style=\"color: red\">xxFAILEDxx</span>";
    }
    data += `Value tested: ${element.idIn} Expected result: ${element.expected} ${result} <br/>`;
  });
  document.getElementById("data").innerHTML = data;
})();