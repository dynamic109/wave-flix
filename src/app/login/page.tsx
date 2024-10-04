import LoginSignupPage from "@/components/LoginSignupPage";

export default function page() {
  return (
    <LoginSignupPage
      text={"Login"}
      email={"Email"}
      password={"Password"}
      isLoginPage={true}
      isSignupPage={false}
    />
  );
}
