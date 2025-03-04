// let allData = [1, 2, 3, 4,5,6,7,8,9]
export function Checking(startId,endId,allData) {
    let founded_Routes = [];
    // const startId = 5;
    // const endId = 9;
    let routes = allData.map(id => {
        let row = allData.map(el => id != el && [id, el])
        row = row.filter(el => el != false);
        return { x: id, routes: row }
    })
    let firstRt = routes.find(el => el.x == startId);
    firstRt.routes.map(el=>choosing(el))
    



    function choosing(R) {
        let length = R.length;
        let target = R[length - 1]
        // console.log(target)

        let nextR = routes.find(el => el.x == target);
        // console.log(target,nextR.routes);
        nextR.routes = nextR.routes.filter(el => el[el.length - 1] > target  );

        let cos = nextR.routes.map(el => {
            let length2 = el.length;
            let target2 = el[length2 - 1];
            
            let nowData = [...R,target2  ]
            // console.log(nowData)
            // console.log(nowData, target2)
            if (target2 == endId) {
                // alert(nowData)
                console.log(nowData,"- ended")

                founded_Routes.push(nowData)
            }
            else{
                choosing(nowData)

            }


        })
        // console.log(R)
    }

    console.log(founded_Routes,"ended")
    return founded_Routes
}

