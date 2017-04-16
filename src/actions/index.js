export const AGE_VERIFICATION = 'AGE_VERIFICATION';

export function verifyAge(age) {
  return {
    type: AGE_VERIFICATION,
    payload: age
  }
}