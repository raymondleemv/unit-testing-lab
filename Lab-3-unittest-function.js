//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(idIn) {
  const regex = /^(n|N)\d{8}$/;
  return regex.test(idIn);
}
