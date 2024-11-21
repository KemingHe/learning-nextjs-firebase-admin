"use server";

export default async function signInServerAction(
  formData: FormData
): Promise<void> {
  console.log(`"signInAction" invoked with ${JSON.stringify(formData)}`);
}
