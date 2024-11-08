interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (
  profile: Profile,
  fieldsToUpdate: Partial<Profile>
): Profile => {
  //   console.log(fieldsToUpdate);
  return { ...profile, ...fieldsToUpdate };
};
