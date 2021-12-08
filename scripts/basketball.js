const ball = $(".ball");

$(".shoot").click(function () {
  console.log("shoot");

  $(".man").attr("src", "images/basketball/after.svg");

  const time = 150;

  ball.animate(
    {
      left: "195px",
      bottom: "252px",
    },
    time,
    "linear"
  );

  ball.animate(
    {
      left: "295px",
      bottom: "300px",
    },
    time,
    "linear"
  );

  ball.animate(
    {
      left: "395px",
      bottom: "330px",
    },
    time,
    "linear"
  );

  ball.animate(
    {
      left: "495px",
      bottom: "320px",
    },
    time,
    "linear"
  );

  ball.animate(
    {
      left: "580px",
      bottom: "300px",
    },
    0.85 * time,
    "linear"
  );

  ball.animate(
    {
      left: "620px",
      bottom: "280px",
    },
    0.4 * time,
    "linear"
  );

  ball.animate(
    {
      left: "670px",
      bottom: "260px",
    },
    0.5 * time,
    "linear"
  );

  ball.animate(
    {
      left: "680px",
      bottom: "255px",
    },
    0.2 * time,
    "linear"
  );

  ball.animate(
    {
      left: "660px",
      bottom: "251px",
    },
    0.2 * time,
    "linear"
  );

  ball.animate(
    {
      left: "675px",
      bottom: "245px",
    },
    0.2 * time,
    "linear"
  );

  ball.animate(
    {
      left: "670px",
      bottom: "235px",
    },
    0.2 * time,
    "linear"
  );

  ball.animate(
    {
      bottom: "00px",
    },
    time,
    "linear"
  );
});

$(".reset").click(function () {
  $(".man").attr("src", "images/basketball/before.svg");
  ball.animate({ left: "95px", bottom: "152px" }, 100);
});
