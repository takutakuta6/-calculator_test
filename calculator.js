let num_flag = 0     //数字の入力があるかどうかを調べるフラグ
let op_flag = 0      //演算子の入力があるかどうかを管理するフラグ
let dot_flag = 0      //.が押されたかを管理するフラグ
let first_flag = 0   //初めてボタンが押されたかを管理するフラグ

let dis_num = ''     //ディスプレイに表示する変数
let total = 0        //計算結果を入れる変数
let op                //演算子をいれる変数

//数字 or . の入力があったとき
const input_number = (value) => {
    if (value === '.') {
        if (first_flag === 0) {
            dis_num = total + value
            document.getElementById('d_box').textContent = dis_num;
            first_flag = 1;
            dot_flag = 1;
        } else if (dot_flag !== 1) {
            dis_num += value;
            document.getElementById('d_box').textContent = dis_num;
            dot_flag = 1;
        }
    } else if (first_flag === 1 || value !== '0') {
        num_flag = 1;
        dis_num += value;
        document.getElementById('d_box').textContent = dis_num;
        first_flag = 1;
    }
}

//演算子 or = の入力があったとき
const input_operator = (value) => {
    if (num_flag === 1) {
        if (op_flag === 0) {
            if (value !== '=') {
                op_flag = 1;
                total = dis_num;
                op = value;
                dis_num = '';
                document.getElementById('d_box').textContent = total;
                console.log(op);
            }
        } else {
            if (value === '=') {
                op_flag = 0;
                total = eval(total + op + dis_num);
                document.getElementById('d_box').textContent = total;
                dis_num = total;
            } else {
                num_flag = 0;
                total = eval(total + op + dis_num);
                dis_num = '';
                document.getElementById('d_box').textContent = total;
                op = value;
                console.log(op);
            }
        }
        dot_flag = 0;
    }
}

// %の入力があったとき
const input_percent = () => {
    const tmp = document.getElementById('d_box').textContent;
    dis_num = eval(tmp / 100);
    document.getElementById('d_box').textContent = dis_num;
}

// +/-の入力があったとき
const input_sign = () => {
    const tmp = document.getElementById('d_box').textContent;
    dis_num = eval(-1 * tmp);
    document.getElementById('d_box').textContent = dis_num;
}

// cの入力があったとき
const input_clear = () => {
    num_flag = 0;
    op_flag = 0;
    first_flag = 0;
    dot_flag = 0;
    dis_num = '';
    total = 0;
    document.getElementById('d_box').textContent = total;
    console.log(total)
}

document.getElementById('d_box').textContent = total;
