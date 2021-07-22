import Nav from '../navigation/Nav';

/* eslint-disable react/prop-types */
function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
