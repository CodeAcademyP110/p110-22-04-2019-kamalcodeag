// window.onload = function()
// {
//     if(localStorage.getItem("basket") === null)
//     {
//         localStorage.setItem("basket", JSON.stringify([]));
//     }
//     UpdateBasketIcon();

//     const productButtons = document.querySelectorAll('.btn-product');

//     [...productButtons].forEach(pro => {
//         pro.onclick = function(e)
//         {
//             e.preventDefault();
//             const proId = this.parentElement.getAttribute("data-id");

//             const basket = JSON.parse(localStorage.getItem("basket"));

//             const basketElement = basket.find(el => {
//                 return el.id === proId;
//             })

//             if(basketElement === undefined)
//             {
//                 basket.push({
//                     id: proId,
//                     count: 1
//                 })
//             }
//             else{
//                 basketElement.count++;
//             }
            
//             //update localstorage to include new product
//             localStorage.setItem("basket", JSON.stringify(basket));
//             UpdateBasketIcon();
//         }
//     })

// }


// function UpdateBasketIcon()
// {
//     const basket = JSON.parse(localStorage.getItem("basket"));
//     document.querySelector('#basket-count').innerText = basket.length;
//     // document.querySelector('#basket-count').innerText = basket.reduce((t, p) => t + p.count, 0);
// }












// --- HOME TASK --- //

window.onload = function()
{
    if(localStorage.getItem("basket") === null)
    {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    UpdateBasketIcon();

    const productButtons = document.querySelectorAll('.btn-product');

    const basket = JSON.parse(localStorage.getItem("basket"));

    [...productButtons].forEach(pro => {
        pro.onclick = function(e)
        {
            e.preventDefault();
            const proId = this.parentElement.getAttribute("data-id");

            // const basket = JSON.parse(localStorage.getItem("basket"));

            const basketElement = basket.find(el => {
                return el.id === proId;
            })

            if(basketElement === undefined)
            {
                basket.push({
                    id: proId,
                    count: 1,
                    image: pro.parentElement.previousElementSibling.getAttribute("src"),
                    name: pro.parentElement.firstElementChild.innerText
                })
            }
            else{
                basketElement.count++;
            }
            
            //update localstorage to include new product
            localStorage.setItem("basket", JSON.stringify(basket));
            UpdateBasketIcon();


            // basket.forEach(element =>
            // {
            //     let table = document.querySelector("table");
            //     let row = document.createElement("tr");
            //     let imgCol = document.createElement("td");
            //     let nameCol = document.createElement("td");
            //     let countCol = document.createElement("td");
            //     let img = document.createElement("img");
            //     img.src = element.image;
            //     nameCol.innerText = element.name;
            //     countCol.innerText = element.count;
            //     imgCol.appendChild(img);
            //     row.appendChild(imgCol);
            //     row.appendChild(nameCol);
            //     row.appendChild(countCol);
            //     table.lastElementChild.appendChild(row);
            // })
        }
    })


    basket.forEach(element =>
    {
        let table = document.querySelector(".spec-table");
        let row = document.createElement("tr");
        let imgCol = document.createElement("td");
        let nameCol = document.createElement("td");
        let countCol = document.createElement("td");
        let img = document.createElement("img");
        img.src = element.image;
        img.style = "width: 100px; height: 100px";
        nameCol.innerText = element.name;
        countCol.innerText = element.count;
        imgCol.appendChild(img);
        row.appendChild(imgCol);
        row.appendChild(nameCol);
        row.appendChild(countCol);
        table.lastElementChild.appendChild(row);
    })

}


function UpdateBasketIcon()
{
    const basket = JSON.parse(localStorage.getItem("basket"));
    document.querySelector('#basket-count').innerText = basket.length;
    // document.querySelector('#basket-count').innerText = basket.reduce((t, p) => t + p.count, 0);
}


// --- HOME TASK --- //









    // --- PRACTICE --- //

    // let input = document.querySelector("input");
    // // let text = document.querySelector("p");
    // let result = [];


    // // localStorage.getItem("save");


    // input.oninput = function()
    // {
    //     let value = input.value.trim();
    //     result.push(value);
    // }

    // // console.log(result);

    
    // localStorage.setItem("save", JSON.stringify([]));

    // JSON.parse(localStorage.getItem("save"));

    // --- PRACTICE --- //