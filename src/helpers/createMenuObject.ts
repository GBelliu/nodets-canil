type MenuOptions = '' | 'all' | 'dog' | 'cat';


export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false
  };

  if (activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
}