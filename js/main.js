/**Sắp xếp 3 số nguyên theo thứ tự tăng dần
 * 
 * Khối 1: Input
 *          soNguyenMot, soNguyenHai, soNguyenBa
 * 
 * Khối 2: Các bước xử lý
 *      Sử dụng if else
 *      + if soNguyenMot > soNguyenHai
 *          + if soNguyenHai > soNguyenBa
 *            => soNguyenBa < soNguyenHai < soNguyenMot
 *          + else 
 *                + if soNguyenMot > soNguyenBa
 *                    => soNguyenHai < soNguyenBa < soNguyenMot
 *                + else 
 *                    => soNguyenHai < soNguyenMot < soNguyenBa             
 * 
 *      + else if soNguyenHai > soNguyenBa
 *          + if soNguyenMot > soNguyenBa  
 *            => soNguyenBa < soNguyenMot < soNguyenHai
 *          + else 
 *            => soNguyenMot < soNguyenBa < soNguyenHai
 * 
 *      + else 
 *            => soNguyenMot < soNguyenHai < soNguyenBa
 * 
 * Khối 3: Output
 *          outPut1, outPut2, outPut3
 */

function soTangDan() {

    // Input
    var soNguyenMot = Number(document.getElementById('soNguyenMot').value);
    var soNguyenHai = Number(document.getElementById('soNguyenHai').value);
    var soNguyenBa = Number(document.getElementById('soNguyenBa').value);

    // Process
    if (soNguyenMot > soNguyenHai) {
        if (soNguyenHai > soNguyenBa) {
            document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenBa + ' < ' + soNguyenHai + ' < ' + soNguyenMot;
        } else {
            if (soNguyenMot > soNguyenBa) {
                document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenHai + ' < ' + soNguyenBa + ' < ' + soNguyenMot;
            } else {
                document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenHai + ' < ' + soNguyenMot + ' < ' + soNguyenBa;
            }
        }
    } else if (soNguyenHai > soNguyenBa) {
        if (soNguyenMot > soNguyenBa) {
            document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenBa + ' < ' + soNguyenMot + ' < ' + soNguyenHai;
        } else {
            document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenMot + ' < ' + soNguyenBa + ' < ' + soNguyenHai;
        }
    } else {
        document.getElementById('xepBaSo').innerHTML = '3 số nguyên theo thứ tự tăng dần: ' + soNguyenMot + ' < ' + soNguyenHai + ' < ' + soNguyenBa;
    }

}

document.getElementById('btnTinhToan1').onclick = soTangDan;


/** Chương trình tự động chào hỏi
 * 
 * Khối 1: Input
 *              mySelect
 * 
 * Khối 2: Các bước xử lý
 *          switch mySelect
 *              case 'B':
 *                  loiChao.innerHTML = 'Chào bố nha ^^ !'
 *                  break;
 *              
 *              case 'M':
 *                  loiChao.innerHTML = 'Chào mẹ nha ^^ !'
 *                  break;
 *              
 *              case 'T':
 *                  loiChao.innerHTML = 'Chào anh trai nha ^^ !'
 *                  break;
 *              
 *              case 'G':
 *                  loiChao.innerHTML = 'Chào em gái nha ^^ !'
 *                  break;
 *              
 *              default:
 *                  loiChao.innerHTML = 'Không biết là ai nên không chào    đâu nha (❁´◡`❁) !'
 *                  break;
 * 
 * 
 * Khối 3: Output 
 *              loiChao
 * 
 **/

function chaoHoi() {
    // Input
    var nhanGiaTri = document.getElementById('mySelect').value;
    var inKetQua = document.getElementById('loiChao');

    // Process
    switch (nhanGiaTri) {
        case 'B':
            inKetQua.innerHTML = 'Chào bố nha ^^ !';
            break;

        case 'M':
            inKetQua.innerHTML = 'Chào mẹ nha ^^ !';
            break;

        case 'T':
            inKetQua.innerHTML = 'Chào anh trai nha ^^ !';
            break;

        case 'G':
            inKetQua.innerHTML = 'Chào em gái nha ^^ !';
            break;

        default:
            inKetQua.innerHTML = 'Không biết là ai nên không chào đâu nha (❁´◡`❁) !';
            break;
    }
}

document.getElementById('btnChao').onclick = chaoHoi;


/**Đếm số chẵn lẻ
 * 
 * Khối 1: Input
 *          soNguyen1, soNguyen2, soNguyen3
 * 
 * Khối 2: Các bước xử lý
 *          Khai báo biến tongChan, tongLe, soChan, soLe
 *           if Number.isInteger(soNguyen1) && Number.isInteger   (soNguyen2) && Number.isInteger(soNguyen3)
 *                  if soNguyen1 % 2 = 0
 *                      tongChan++
 *                      soChan += soNguyen1
 *                  else 
 *                      tongLe++
 *                      soLe += soNguyen1
 *                  if soNguyen2 % 2 = 0
 *                      tongChan++
 *                      soChan += soNguyen2
 *                  if soNguyen3 % 2 = 0
 *                      tongChan++
 *                      soLe += soNguyen3
 *           else
 *              => inKetQua.innerHTML = Hãy nhập 3 số nguyên !
 *      
 * Khối 3: Output
 *          inKetQua
 */

function locChanLe() {
    // Input
    var soNguyen1 = Number(document.getElementById('soNguyen1').value);
    var soNguyen2 = Number(document.getElementById('soNguyen2').value);
    var soNguyen3 = Number(document.getElementById('soNguyen3').value);
    var tongChan = 0;
    var tongLe = 0;
    var soChan = '';
    var soLe = '';
    var thongBao = document.getElementById('inKetQua');

    // Process
    if (Number.isInteger(soNguyen1) && Number.isInteger(soNguyen2) && Number.isInteger(soNguyen3)) {
        if (soNguyen1 % 2 == 0) {
            tongChan++;
            soChan += ' ' + soNguyen1;
        } else {
            tongLe++;
            soLe += ' ' + soNguyen1;
        }
        if (soNguyen2 % 2 == 0) {
            tongChan++;
            soChan += ' ' + soNguyen2 + ' ';
        } else {
            tongLe++;
            soLe += ' ' + soNguyen2;
        }
        if (soNguyen3 % 2 == 0) {
            tongChan++;
            soChan += soNguyen3;
        } else {
            tongLe++;
            soLe += ' ' + soNguyen3;
        }
        thongBao.classList.remove('alert-danger');
        thongBao.classList.add('alert-info');
        thongBao.innerHTML = 'Tổng số chẵn: ' + tongChan + '<br>' + 'Tổng số lẻ: ' + tongLe + '<br>' + 'Danh sách số chẵn: ' + soChan + '<br>' + 'Danh sách số lẻ: ' + soLe;
    } else {
        thongBao.classList.remove('alert-info');
        thongBao.classList.add('alert-danger');
        thongBao.innerHTML = 'Vui lòng nhập 3 số nguyên !';
    }
}
document.getElementById('btnSapXep').onclick = locChanLe;


/**Dự đoán loại tam giác
 * 
 * Khối 1: Input
 *          canhA, canhB, canhC
 * 
 * Khối 2: Các bước xử lý
 *          if (canhA == canhB && canhA == canhC) {
        thongBao_2.innerHTML = 'Tam giác đều';
    } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
        thongBao_2.innerHTML = 'Tam giác cân';
    } else if ((bacHaiA == bacHaiB + bacHaiC) || (bacHaiB == bacHaiA + bacHaiC) || (bacHaiC == bacHaiB + bacHaiA)) {
        thongBao_2.innerHTML = 'Tam giác vuông';
    } else {
        thongBao_2.innerHTML = 'Một loại tam giác nào đó';
    }
 * 
 * Khối 3: Output
 *           inKetQua_2
 */

function loaiTamGiac() {
    // Input
    var canhA = Number(document.getElementById('canhA').value);
    var canhB = Number(document.getElementById('canhB').value);
    var canhC = Number(document.getElementById('canhC').value);

    var thongBao_2 = document.getElementById('inKetQua_2');

    var bacHaiA = Math.pow(canhA, 2);
    var bacHaiB = Math.pow(canhB, 2);
    var bacHaiC = Math.pow(canhC, 2);

    // Process
    if (canhA == canhB && canhA == canhC) {
        thongBao_2.innerHTML = 'Tam giác đều';
    } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
        thongBao_2.innerHTML = 'Tam giác cân';
    } else if ((bacHaiA == bacHaiB + bacHaiC) || (bacHaiB == bacHaiA + bacHaiC) || (bacHaiC == bacHaiB + bacHaiA)) {
        thongBao_2.innerHTML = 'Tam giác vuông';
    } else {
        thongBao_2.innerHTML = 'Một loại tam giác nào đó';
    }
}
document.getElementById('btnDuDoan').onclick = loaiTamGiac;