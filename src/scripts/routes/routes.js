import Restaurant from '../views/pages/list-restaurant';
import Favorite from '../views/pages/list-favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;