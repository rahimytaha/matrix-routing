let allData = [1, 2, 3, 4]
export function Checking(loc, data) {
    const startId = 1;
    const endId = 4;
    let routes = allData.map(id => {
        let row = allData.map(el => id != el && [id, el])
        row = row.filter(el => el != false);
        // console.log(row,id);
        return { x: id, routes: row }
    })

    let firstRt = routes.find(el => el.x == startId);
    // console.log(firstRt.routes);


    // firstRt.routes.map(el => choosing(el));
    choosing([1, 2])

    function choosing(R) {
        let length = R.length;
        let target = R[length - 1]

        let nextR = routes.find(el => el.x == target);
        // console.log(target,nextR.routes);
        nextR.routes = nextR.routes.filter(el => el[el.length - 1] >target);
        console.log(nextR)
        // let cos = nextR.routes.map(el => {
        //     let length2 = el.length;
        //     let target2 = el[length2 - 1]
        //     // let i = R.push(target2)
        //     // console.log(i, R, el)
        //     console.log(el)
        // })
        // console.log(cos)
    }
}

