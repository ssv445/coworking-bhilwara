import Window from './Window';
import TypedTerminal from './TypedTerminal';
import StatusBar from './StatusBar';
import { SSH_BLOCK } from './terminals';

export default function SystemSection({
  desksFree,
  totalDesks,
}: {
  desksFree: number;
  totalDesks: number;
}) {
  return (
    <>
      <section id="system" className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-label">system</div>
          <h2 className="section-title display">Live, right now.</h2>
          <p className="section-sub">
            Connect over ssh and the floor introduces itself. The bar below shows the same numbers
            in plain English.
          </p>
          <Window title="ssh — bhilwara" tag="live">
            <TypedTerminal blocks={[SSH_BLOCK]} restart={false} />
          </Window>
        </div>
      </section>
      <StatusBar desksFree={desksFree} totalDesks={totalDesks} />
    </>
  );
}
