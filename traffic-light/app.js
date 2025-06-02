let i = 0;
        let n = 1;
        let cArray = ["red", "yellow", "green"];

        function trafficLight() {
            let l = document.getElementsByClassName("light");  // [3]

            for (let j=0; j<l.length; j++) {
                l[j].style.background="black";
                l[j].innerHTML="";
            }

            l[i].style.background=cArray[i];

            if (i<l.length) {
                l[i].innerHTML=n;
                if (n<=3) {
                    n++;
                }
                if (n==4) {
                    i++;
                    n=1;
                    if (i==3) {
                        i=0;
                    }
                }
            }
            
        }

        setInterval(trafficLight, 1000)