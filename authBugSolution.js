let unsubscribe;

const auth = getAuth();

const handleAuthStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("User is signed in:", user.uid);
    } else {
      // User is signed out
      console.log("User is signed out");
      // Clean up listener when user signs out to free resources.
      unsubscribe();
    }
  });
};

handleAuthStateChanged();
//unsubscribe(); //this is now handled in the state changed event