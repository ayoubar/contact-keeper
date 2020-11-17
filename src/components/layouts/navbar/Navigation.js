import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <ul class="navbar-nav ml-auto">
      {navigation.map((element) => (
        <li class="nav-item active" key={element.link}>
          <Link class="nav-link" to={element.path}>
            {' '}
            {element.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const navigation = [
  { path: '/about', link: 'about' },
  { path: '/', link: 'home' },

  { path: '/login', link: 'login' },
  { path: '/register', link: 'register' },
];

export default Navigation;
