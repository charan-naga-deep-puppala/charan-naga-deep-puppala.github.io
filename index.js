const msalConfig = {
    auth: {
      clientId: 'c7f9e5a9-8f2e-41e2-83cf-5f7d1281558c', // Replace with your application's client ID
      authority: 'https://login.microsoftonline.com/df7217c9-cec8-4cc2-8e6a-a1cfbfadb321', // Replace with your Azure AD tenant ID
      redirectUri: 'https://youtube.com/', // Replace with your redirect URI
    },
  };
  
  const msalInstance = new msal.PublicClientApplication(msalConfig);
  
  document.getElementById('loginButton').addEventListener('click', async () => {
    try {
      await msalInstance.loginRedirect({
        scopes: ['openid', 'profile', 'user.read'],
      });
    } catch (error) {
      console.error('Login Error:', error);
    }
  });
  
  // Add the following code to handle the redirect response after login
  msalInstance.handleRedirectPromise()
    .then(response => {
      console.log('Redirect Response:', response);
  
      // You can perform additional actions after a successful login here
    })
    .catch(error => {
      console.error('Redirect Error:', error);
    });
  