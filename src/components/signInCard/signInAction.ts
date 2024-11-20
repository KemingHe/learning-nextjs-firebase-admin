"use server";

export default async function signInAction(formData: FormData): Promise<void> {
  console.log(`"signInAction" invoked with ${JSON.stringify(formData)}`);
}
