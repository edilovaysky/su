
const BASE_API = 'https://testjob.checkport.ru'


class Helper {
     
    static getMenuWithParams (id, limit, page) {
      return fetch(`${BASE_API}/filial/${id}/menu/?limit=${limit}&page=${page}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respons) => respons.json())
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    static getBranches () {
        return fetch(`${BASE_API}/filial/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((respons) => respons.json())
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.log(err);
          });
      }

      
      static getBranchAllMenus(id) {
        return fetch(`${BASE_API}/filial/${id}/menu/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((respons) => respons.json())
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
}
export default Helper;