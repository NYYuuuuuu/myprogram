            var aLi = document.getElementsByClassName('nav');
            var oImgs = document.getElementById('middle-imgs');
            //  banner
            var aImg = oImgs.getElementsByClassName('mimgs');
            for(var i = 0;i<aLi.length;i++){
                aLi[i].index = i;
                aLi[i].onmouseover = function(){
                    for(var j=0;j<aLi.length;j++){
                        aLi[j].className = 'nav';
                        aImg[j].style.opacity = "0";
                    }
                    this.className = "selected nav";
                    aImg[this.index].style.opacity = "1";
                }
            }