//BÀI 1
/**
 * Input: Nhập vào 3 số nguyên
 * Handle: - tạo biến int1, int2, int3 và temp - biến tạm thời để đổi chỗ sắp xếp
 *         - chuyển số bé nhất vào a:
 *              + nếu a >= b : gán biến temp = a; gán a = b rồi gắn b = temp.
 *              + nếu a >= c : gán biến temp = a; gán a = c rồi gán c = temp.
 *         - chuyển số bé nhì  vào b:
 *              + nếu b >= c : gán biến temp = b; gán b = c rồi gán c = temp.
 * Output: xuất ra a - b - c là thứ tự đã sắp xếp theo thứ tự tăng dần
 */
var btnSapXep = document.getElementById('btnSapXep');

btnSapXep.onclick = function () {
    var a = parseInt(document.getElementById('so1').value);
    var b = parseInt(document.getElementById('so2').value);
    var c = parseInt(document.getElementById('so3').value);
    // console.log(a, b, c);
    // console.log(typeof (a), typeof (b), typeof (c));
    var temp;

    // chuyển số bé nhất vào a
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }
    // chuyển số bé nhì vào b
    if (b > c) {
        temp >= b;
        b = c;
        c = temp;
    }

    document.getElementById('xuatThuTuTangDan').innerHTML = 'Thứ tự tăng dần là ' + a + ' => ' + b + ' => ' + c;
}

//BÀI 2
/**
 * Input: Nhập vào thành viên đang sử dụng máy
 * Handle: - tạo biến thanhVien
 *         - trường hợp nhập vào 'B' sẽ nhận là Bố
 *         - trường hợp nhập vào 'M' sẽ nhận là Mẹ
 *         - trường hợp nhập vào 'A' sẽ nhận là Anh Trai
 *         - trường hợp nhập vào 'E' sẽ nhận là Em Gái
 *         - mặc đinh sẽ nhận là không phải thành viên gia đình.
 * Output: xuất ra lời chào thành viên tương ứng nếu nhập đúng hoặc lời đề nghị nhập lại nếu nhập sai.
 */
var btnXacNhan = document.getElementById('btnXacNhan');

btnXacNhan.onclick = function() {
    var thanhVien = document.getElementById('ipThanhVien').value;

    switch(thanhVien) {
        case 'B':
            document.getElementById('chaoHoi').innerHTML = 'Xin chào Bố.';
            break;
        case 'M':
            document.getElementById('chaoHoi').innerHTML = 'Xin chào Mẹ.';
            break;
        case 'A':
            document.getElementById('chaoHoi').innerHTML = 'Xin chào Anh Trai.';
            break;
        case 'E':
            document.getElementById('chaoHoi').innerHTML = 'Xin chào Em Gái.';
            break;
        default: 
            document.getElementById('chaoHoi').innerHTML = 'Xin nhập đúng thành viên.';
    }
}


//BÀI 3
/**
 * Input: Nhập vào 3 số nguyên
 * Handle: - tạo biến s1, s2, s3 và soChan=0, soLe=0
 *         - lấy số đầu tiên chia lấy phần dư cho 2, nếu số dư = 0 thì cộng soChan thêm 1, còn ko thì sẽ cộng soLe thêm 1
 *         - làm tương tư cho 2 số còn lại
 * Output: xuất ra số lượng số chẵn (soChan) và số lẻ (soLe)
 */
var btnTinh = document.getElementById('btnTinh');

btnTinh.onclick = function () {
    var s1 = document.getElementById('s1').value;
    var s2 = document.getElementById('s2').value;
    var s3 = document.getElementById('s3').value;
    // console.log(s1, s2, s3);
    var soChan = 0;
    var soLe = 0;

    // s1
    if (s1 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    // s2
    if (s2 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    // s3
    if (s3 % 2 == 0) {
        soChan += 1;
    } else {
        soLe += 1;
    }
    document.getElementById('xuatChanLe').innerHTML = 'Có ' + soChan + ' số chẵn.<br>Có ' + soLe + ' số lẻ.';
}

//BÀI 4
/**
 * Input: Nhập vào 3 cạnh tam giác
 * Handle: - tạo biến a, b, c là 3 cạnh tam giác
 *         - nếu 1 trong 3 cạnh <= 0 hoặc tổng 2 cạnh bất kỳ <= cạnh còn lại thì là a,b,c không phải là 3 cạnh của 1 tam giác.
 *         - còn không, nếu 3 cạnh bằng nhau thì tam giác đều
 *         - còn không, nếu 2 cạnh bất kỳ bằng nhau thì tam giác cân
 *         - còn không, nếu bình phương 1 cạnh bất kỳ = tổng bình phương 2 cạnh còn lại thì tam giác vuông.
 *         - còn không thì là tam giác thường.
 * Output: xuất ra loại tam giác.
 */
var btnLoaiTamGiac = document.getElementById('btnLoaiTamGiac');

btnLoaiTamGiac.onclick = function () {
    var a = parseInt(document.getElementById('canh1').value);
    var b = parseInt(document.getElementById('canh2').value);
    var c = parseInt(document.getElementById('canh3').value);
    // console.log(a,b,c);

    if (a<=0 || b<=0 || c<=0 || a+b<=c || a+c<=b || b+c<=a) {
        document.getElementById('ketQua').innerHTML = 'Đây không phải là 3 cạnh tam giác.';
    } else if (a==b==c) {
        document.getElementById('ketQua').innerHTML = 'Đây là tam giác đều.';
    } else if (a==b || a==c || b==c) {
        document.getElementById('ketQua').innerHTML = 'Đây là tam giác cân.';
    } else if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b) {
        document.getElementById('ketQua').innerHTML = 'Đây là tam giác vuông.';
    } else {
        document.getElementById('ketQua').innerHTML = 'Đây là tam giác thường';
    }
} 