import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('User can visit GoIT page', () => {
  beforeEach('go to page', () => {
    LoginPage.navigate()
  });

  // TEST 1
  it('successfully login to the GoIT page TEST 1', () => {
    LoginPage.logInUser('user888@gmail.com', '1234567890');
    HomePage.goToCourseHomepage();
    HomePage.proceedToNext();
    HomePage.logOut();
  });

  // TEST 2
  it('successfully login to the GoIT page TEST 2', () => {
    LoginPage.logInUser('testowyqa@qa.team', 'QA!automation-1');
    HomePage.goToCourseHomepage();
    HomePage.proceedToNext();
    HomePage.logOut();
  });
});