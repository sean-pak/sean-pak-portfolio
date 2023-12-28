const AboveFoldLeftText = () => {
  return (
    <div className="space-y-3 pt-[2.5rem]">
      <div className="text-h2">hi, i'm sean pak 👋🏻</div>
      <hr style={{ borderTop: "1px solid white" }} />
      <div className="text-body space-y-1.5">
        <div className="flex space-x-2">
          <div>design + product + development at</div>
          <a
            className="text-body-gold-link"
            href="https://www.edinn.tech/"
            target="_blank"
          >
            EdDen ↗
          </a>
        </div>
        <div className="flex space-x-2">
          <div>previously worked with</div>
          <div className="flex space-x-2 text-body-gold-link">
            <a href="https://www.att.com/" target="_blank">
              AT&T ↗
            </a>
            <a href="https://www.novelly.org/" target="_blank">
              Novelly ↗
            </a>
            <div className="text-body-gold">and</div>
            <a href="https://www.paradox.ai/" target="_blank">
              Paradox ↗
            </a>
          </div>
        </div>
        <div className="flex space-x-2">
          <div>education from</div>
          <a
            className="text-body-gold-link"
            href="https://www.jhu.edu/"
            target="_blank"
          >
            Johns Hopkins University ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboveFoldLeftText;
