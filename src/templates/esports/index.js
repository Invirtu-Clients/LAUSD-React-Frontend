
import {BrowserRouter, Routes, Route } from "react-router-dom";




// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function Template() {
  
	return (
		// <div className="App">
		// 	<ShopPage />
		// </div>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeTwo  />} />
          
          <Route path={Navigate.homePage()} element={<HomeTwo />} />
          <Route path={Navigate.privacyPage()} element={<PrivacyPage />} />
          <Route path={Navigate.termsPage()} element={<TermsPage />} />
          <Route path={Navigate.contactPage()} element={<ContactPage />} />
          <Route path={Navigate.dataRemovalPage()} element={<DataRemovalPage />} />
          <Route path={Navigate.gdprPage()} element={<GDPRPage />} />
          <Route path={Navigate.accessDeniedPage()} element={<AccessDeniedPage />} />

          <Route path={Navigate.accountMainPage()} element={<AccountUpdatePage />} />
          <Route path={Navigate.accountRegisterStep2()} element={<RegisterStep2 />} />

          <Route path={Navigate.authLogin()} element={<LogIn />} />
          <Route path={Navigate.authRegister()} element={<SignUp />} />
          <Route path={Navigate.authForgotPassword()} element={<ForgotPassword />} />
          <Route path={Navigate.authResetPassword()} element={<ResetPassword />} />
          <Route path={Navigate.authFacebook()} element={<AuthFacebook />} />
          <Route path={Navigate.authTwitch()} element={<AuthTwitch />} />
          <Route path={Navigate.authYoutube()} element={<AuthYoutube />} />

          <Route path={Navigate.streamsPage()} element={<StreamsPage />} />
          <Route path={Navigate.streamsCreatePage()} element={<StreamsCreatePage />} />
          <Route path={Navigate.streamsWatchPage()} element={<StreamsWatchPage />} />
          <Route path={Navigate.streamsBroadcastPage()} element={<StreamsBroadcastPage />} />
          <Route path={Navigate.streamsWatchRecordingPage()} element={<WatchRecordingPage />} />
          <Route path={Navigate.streamsManageRecordingPage()} element={<ManageRecordingPage />} />
          <Route path={Navigate.streamsCohostWatch()} element={<CohostWatchStream />} />

          <Route path={Navigate.usersList()} element={<UsersPage />} />
          <Route path={Navigate.usersProfilePage()} element={<UserProfilePage />} />
          
         

          <Route path="*" element={<ErrorPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="game-list" element={<GameListSection />} />
          <Route path="game-list2" element={<GameListTwoSection />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="achievements" element={<AchievementPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single" element={<TeamSinglePage />} />
         
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop-single" element={<ShopDetails />} />
          <Route path="cart-page" element={<ShopCart />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-2" element={<BlogPageTwo />} />
          <Route path="blog-single" element={<BlogDetails />} />
          
        </Routes>
      </>
		
	);
}

export default Template;
