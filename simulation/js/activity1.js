let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Eigen Analysis - Polynomial Method</h4>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    A = Math.floor(Math.random() * 15) + 10;
    B = Math.floor(Math.random() * 8) + 1;
    B = -B;
    console.log("A= ", A);
    console.log("B= ", B);
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$
            \\begin{bmatrix}
            ${A} & ${B}\\\\
            ${B} & ${A}\\\\
            \\end{bmatrix}
        $$
        <div><p style='text-align: left; font-weight: 600'>Find the eigen values.</p></div>
        
        <div><span style='display: inline-block;'>$$
        \\begin{vmatrix}
        ${A}-\\lambda & ${B}\\\\
        ${B} & ${A}-\\lambda\\\\
        \\end{vmatrix}
        $$</span>
        <span style='margin-left: 4%'>
        = <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp'><span id='a21-val-sp'></span> &lambda;<sup>2</sup> + <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp'><span id='a22-val-sp'></span> &lambda; + <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp'><span id='a23-val-sp'></span>
        </span></div>
        <div style='text-align: center; margin-top:3%'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_vals();' >Verify</button></div>

        <div id="vals-div" style="display:none">
            $$ \\lambda{1}, \\lambda{2} = \\frac{-b &plusmn; \\sqrt{b^2-4ac}}{2a} $$
            Eigen Value &lambda;<sub>1</sub> = <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp'><span id='a24-val-sp'></span> <br>
            Eigen Value &lambda;<sub>2</sub> = <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a25-inp'><span id='a25-val-sp'></span>
            <div style='text-align: center; margin-top:3%'><button class='btn btn-info std-btn' id='temp-btn-equation3' onclick='verify_eqnvals();' >Verify</button></div>
        </div>
        `;
    maindiv.innerHTML += text;
    hide_all_steps();
    calculations();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculations() {
    a = 1;
    b = (-2 * A);
    c = (Math.pow(A, 2)) - (Math.pow(B, 2));
    console.log("1st textbox value a= ", a);
    console.log("2nd textbox value b= ", b);
    console.log("3rd textbox value c= ", c);
    val1 = ((-b) + Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a);
    val2 = ((-b) - Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a);
    console.log("val 1= ", val1);
    console.log("val 2= ", val2);
}
function verify_vals() {
    let btn = document.getElementById('temp-btn-equation2');
    let inp1 = document.getElementById('a21-inp');
    let sp1 = document.getElementById('a21-val-sp');
    let inp2 = document.getElementById('a22-inp');
    let sp2 = document.getElementById('a22-val-sp');
    let inp3 = document.getElementById('a23-inp');
    let sp3 = document.getElementById('a23-val-sp');
    if (!verify_values(parseInt(inp1.value), parseInt(a))) {
        alert('first textbox value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(b.toFixed(2)))) {
        alert('second textbox value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(c.toFixed(2)))) {
        alert('third textbox value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${a.toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${b.toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${c.toFixed(2)}`;
    let div = (document.getElementById('vals-div'));
    div.style.display = 'block';
    //exp_complete();
}
function verify_eqnvals() {
    let btn = document.getElementById('temp-btn-equation3');
    let inp1 = document.getElementById('a24-inp');
    let sp1 = document.getElementById('a24-val-sp');
    let inp2 = document.getElementById('a25-inp');
    let sp2 = document.getElementById('a25-val-sp');
    if (!verify_values(parseInt(inp1.value), parseInt(val1))) {
        alert('Eigen value 1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(val2.toFixed(2)))) {
        alert('Eigen value 2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${val1.toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${val2.toFixed(2)}`;
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-equation3'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map