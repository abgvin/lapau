import Restaurant from '../views/pages/list-restaurant';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
