import HomepageLoginForm from "./HomepageLoginForm";

function HomepageLoginContainer({ user, currentAccount, setCurrentAccount }) {
  return (
    <section className="login-section">
      <div className="login-container">
        <HomepageLoginForm
          user={user}
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
        />
      </div>
    </section>
  );
}

export default HomepageLoginContainer;
