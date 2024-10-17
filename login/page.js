const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await signIn('credentials', {
    redirect: false,
    email,
    password,
  });

  console.log('SignIn result:', result);

  if (result.error) {
    console.error('Login error:', result.error);
    setLoginError(result.error);
  } else {
    router.push('/dashboard');
  }
};
