function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p style={{ fontSize: "1.5rem" }}>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p style={{ fontSize: "1.5rem" }}>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
      </header>
    </>
  );
}

export default Progress;
