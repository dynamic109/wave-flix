import LoginSignupPage from "@/components/LoginSignupPage";

export default function page() {
  return (
    <LoginSignupPage
      text={"Sign Up"}
      name={"Name"}
      email={"Email"}
      password={"Password"}
      isSignupPage={true}
    />
  );
}
