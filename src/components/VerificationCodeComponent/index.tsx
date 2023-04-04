import "./verificationCodeComponent.css";

const VerificationCodeComponent = () => {
  // Timer...
  var countdownNumberEl = document.getElementById("countdown-number");
  var countdown = 10;

  countdownNumberEl!.style.color = "black";

  countdownNumberEl!.textContent = countdown.toString();

  setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl!.textContent = countdown.toString();
  }, 1000);

  return (
    <div>
      <div className="container bg-gray-100 w-2/4 m-auto border-2 border-dashed hover:border-solid border-teal-500 rounded">
        <div className="flex flex-col content-center w-3/4 mx-auto p-2">
          <h2 className="text-center font-bold text-xl">Verificacion</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            accusantium illum aut repudiandae asperiores, nihil sint distinctio,
            dolorem fuga ipsum ut tenetur culpa natus ad necessitatibus veniam,
            consectetur cum.
          </p>
        </div>
      </div>
      <div className="container bg-white w-2/4 m-auto rounded">
        <div id="countdown">
          <div id="countdown-number"></div>
          <svg>
            <circle r="18" cx="20" cy="20"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeComponent;
