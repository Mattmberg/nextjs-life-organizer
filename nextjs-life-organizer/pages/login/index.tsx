import Container from "@/components/Container";

export default function Login() {
  return (
    <>
    <Container>
      <main>
        <h1>Log In</h1>

        <h2>Welcome, please use your credentials to log in.</h2>

        <form method="post">
          <div id="form-group">
            <label htmlFor="email">
              Email Address
            </label>
            <input type="email" name="email" id="email"/>
          </div>
          <div id="form-group">
            <label htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password"/>
          </div>
        </form>
      </main>
    </Container>
    </>
  );
}