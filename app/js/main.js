
class Talk {
    constructor(block, arrow, descriptionBlock) {
        block.addEventListener('click', () => {
            //this.defineProperty

            if(this.flag) {
                this.flag = false;
                arrow.style.cssText = 'transform: rotate(180deg)';
                descriptionBlock.style.cssText = 'display: block';


            } else {
                this.flag = true;
                arrow.style.cssText = 'transform: rotate(0)';
                descriptionBlock.style.cssText = 'display: none';
                console.log(this.flag);
            }

        });
    }
}

let block1 = document.querySelectorAll('.our-talk__item')[0];
let arrow1 = document.querySelectorAll('.our-talk__item_arrow')[0];
let descriptionBlock1 = document.querySelectorAll('.our-talk__description-text')[0];

let talk = new Talk(block1, arrow1, descriptionBlock1);

