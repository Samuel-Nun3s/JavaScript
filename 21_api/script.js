const URL = "https://dummyjson.com/products";

async function chamarApi() {
    const respostaApi = await fetch(URL);
    if (respostaApi.status === 200) {
        const obj = await respostaApi.json();
        console.log(obj);9
    }
}

chamarApi();
