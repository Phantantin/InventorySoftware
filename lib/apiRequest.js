// import toast from "react-hot-toast";

// export async function makePostRequest(
//   setLoading,
//   endpoint,
//   data,
//   resourceName,
//   reset
// ) {
//   try {
//     setLoading(true);
//      const baseUrl = "http://localhost:3000";
//     const response = await fetch(`${baseUrl}/${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//       console.log(response);
//       setLoading(false);
//       toast.success(`New ${resourceName} Created Successfully`);
//       reset();
//     } else {
//       setLoading(false);
//       toast.error("Something Went Wrong");
//     }
//   } catch (error) {
//     setLoading(false);
//     console.log(error);
//   }
// }

import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  t // ✅ thêm hàm dịch
) {
  try {
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`${t("createdSuccessfully")} ${t(resourceName)} `);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error(t("The Giving Warehouse Stock is NOT ENOUGH"));
      } else {
        toast.error(t("somethingWentWrong"));
      }
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
    toast.error(t("networkError"));
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset,
  t // ✅ thêm hàm dịch
) {
  try {
    // const router = useRouter()
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`${t("updateSuccessfully")} ${t(resourceName)} `);
      redirect();
    } else {
      setLoading(false);
      toast.error(t("somethingWentWrong"));
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
    toast.error(t("networkError"));
  }
}
