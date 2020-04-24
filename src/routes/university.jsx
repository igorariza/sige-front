import University from 'views/university/Dashboard/University.jsx'
import Course from 'views/university/Course/Course.jsx'
import AddCourse from 'views/university/Course/AddCourse.jsx'
import EditCourse from 'views/university/Course/EditCourse.jsx'
import CourseView from 'views/university/Course/CourseView.jsx'

import Library from 'views/university/Library/Library.jsx'
import AddLibrary from 'views/university/Library/AddLibrary.jsx'
import EditLibrary from 'views/university/Library/EditLibrary.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR

var dashRoutes = [
  
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Inicio',
    icon: 'home',
    badge: '',
    component: University,
  },
  // Options Teacher
  { path: BASEDIR+"/university/AddProfessor", icon: "user", name: "Docentes", component: University},
  { path: BASEDIR+"/university/professors", icon: "people", name: "Estudiantes", component: University},
  { path: BASEDIR+"/university/professors", icon: "folder-alt", name: "Cursos", component: University},
  { path: BASEDIR+"/university/add-professor", icon: "folder-alt", name: "Clases Online", component: University},
  { path: BASEDIR+"/university/professors", icon: "chart", name: "Informes", component: University},
  { path: BASEDIR+"/university/professors", icon: "notebook", name: "Biblioteca", component: University},
  { path: BASEDIR+"/university/professors", icon: "event", name: "Eventos", component: University},
  { path: BASEDIR+"/university/professors", icon: "envelope", name: "Email", component: University},
  { path: BASEDIR+"/university/professors", icon: "help", name: "¿Te Ayudamos?", component: University},
  
  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
    name: 'Dashboard',
  },
]
export default dashRoutes
