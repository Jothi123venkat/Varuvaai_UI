import React, { useEffect, useState } from 'react'
import apiService from '../ApiService/apiService';

const Component = () => {

    const [data,setData] = useState()
 
  useEffect(() => {
    getApi()
  }, []);


 const getApi = () => {
    var req = {
        "listSize": 5,
        "pageNumber": 2,
        "showProductImage": 1,
        "searchString": '',
        "show": "SALEAVAILABLE"
      }
        apiService('product/list', req, 'unauthpost')
          .then((result) => {
            setData(result.data.responseModelList);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
          });
      };

  return (
    <div>
        {
          data && data.map((a,i)=>(
            <ul key={i}>
              <li>{a.productName}</li>
              <li>{a.categoryType}</li>

            </ul>
          ))
        }
    </div>
  )
}

export default Component