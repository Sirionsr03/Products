import { MemberInterface } from "../interfaces/Member";
import { SellerInterface } from "../interfaces/Seller";
import axios from 'axios';


const apiUrl = "http://localhost:8000";

//Member

async function GetMember() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(`${apiUrl}/member`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// async function GetGenders() {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//
//   let res = await fetch(`${apiUrl}/genders`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

async function DeleteMemberByID(id: number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  const res = await fetch(`${apiUrl}/member/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return true;
      } else {
        return false;
      }
    });

  return res;
}

async function GetMemberById(id: number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  const res = await fetch(`${apiUrl}/member/${id}`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}


async function CreateMember(data: MemberInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${apiUrl}/member`, requestOptions)
    .then((res) => {
      if (res.status == 201) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

async function UpdateMember(data: MemberInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${apiUrl}/member`, requestOptions)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

//Seller

async function GetSeller() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const res = await fetch(`${apiUrl}/seller`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  // async function GetGenders() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //
  //   let res = await fetch(`${apiUrl}/genders`, requestOptions)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         return res.json();
  //       } else {
  //         return false;
  //       }
  //     });
  
  //   return res;
  // }
  
  async function DeleteSellerByID(id: number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    const res = await fetch(`${apiUrl}/seller/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  async function GetSellerById(id: number | undefined) {
    const requestOptions = {
      method: "GET"
    };
  
    const res = await fetch(`${apiUrl}/seller/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  
  async function CreateSeller(data: SellerInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    const res = await fetch(`${apiUrl}/seller`, requestOptions)
      .then((res) => {
        if (res.status == 201) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  async function UpdateSeller(data: SellerInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    const res = await fetch(`${apiUrl}/seller`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }

  //Products

  async function GetProducts(p0: number, page: number, pageSize: number) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const res = await fetch(`${apiUrl}/products`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  // async function GetGenders() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //
  //   let res = await fetch(`${apiUrl}/genders`, requestOptions)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         return res.json();
  //       } else {
  //         return false;
  //       }
  //     });
  
  //   return res;
  // }
  
  async function DeleteProductsByID(id: number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    const res = await fetch(`${apiUrl}/products/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  async function GetProductsById(id: number | undefined) {
    const requestOptions = {
      method: "GET"
    };
  
    const res = await fetch(`${apiUrl}/products/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  
  async function CreateProducts(data: MemberInterface) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    const res = await fetch(`${apiUrl}/products`, requestOptions)
      .then((res) => {
        if (res.status == 201) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }
  
  async function UpdateProducts(data: MemberInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  
    const res = await fetch(`${apiUrl}/products`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }

  async function GetProductsBySellerId(sellerId: number, page: number, pageSize: number) {
    try {
      const res = await axios.get(`${apiUrl}/MyProducts/${sellerId}`, {
        params: {
          page: page,
          pageSize: pageSize,
        },
      });
      return res.status === 200 ? res.data : false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }


export {
  GetMember,
  CreateMember,
  DeleteMemberByID,
  GetMemberById,
  UpdateMember,
  GetSeller,
  CreateSeller,
  DeleteSellerByID,
  GetSellerById,
  UpdateSeller,
  GetProducts,
  CreateProducts,
  DeleteProductsByID,
  GetProductsById,
  UpdateProducts,
  GetProductsBySellerId
};


// import { UsersInterface } from "../../interfaces/IUser";

// const apiUrl = "http://localhost:8000";

// async function GetUsers() {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   let res = await fetch(`${apiUrl}/users`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// async function GetGenders() {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   let res = await fetch(`${apiUrl}/genders`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// async function DeleteUserByID(id: Number | undefined) {
//   const requestOptions = {
//     method: "DELETE"
//   };

//   let res = await fetch(`${apiUrl}/users/${id}`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// async function GetUserById(id: Number | undefined) {
//   const requestOptions = {
//     method: "GET"
//   };

//   let res = await fetch(`${apiUrl}/user/${id}`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }


// async function CreateUser(data: UsersInterface) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let res = await fetch(`${apiUrl}/users`, requestOptions)
//     .then((res) => {
//       if (res.status == 201) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// async function UpdateUser(data: UsersInterface) {
//   const requestOptions = {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

//   let res = await fetch(`${apiUrl}/users`, requestOptions)
//     .then((res) => {
//       if (res.status == 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     });

//   return res;
// }

// export {
//   GetUsers,
//   CreateUser,
//   GetGenders,
//   DeleteUserByID,
//   GetUserById,
//   UpdateUser
// };