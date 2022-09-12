/* eslint-disable max-len */
import { ProjectSection } from '../common/ProjectSection';
import { Tools } from '../common/Tools';
import { PlantsExtra } from './PlantsExtra';
import { ProjectDetails } from './ProjectDetails';

export function PlantsSection() {
  return (
    <ProjectSection
      name="plants"
      title="SuasPlantas"
      extra={<PlantsExtra />}
      className="bg-green-100"
      faderColor="rgb(220 252 231)"
      url="https://suasplantas.com"
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="explanation">
        <p>
          SuasPlantas is a Tinder-like web app to get plant seeds and seedlings for free.
        </p>
        <p>
          It has built-in messaging and location features.
        </p>
      </div>
      <ProjectDetails title="Motivation">
        <p>
          Eu tive essa ideia me questionando o que mais a internet poderia dar de graça (além de educação, software e entretenimento) e observando o hábito de pessoas da minha região de dar plantas umas às outras.
        </p>
        <p>
          Eu pesquisei e parece ser uma ótima ideia.
          Encontrei grupos no Facebook com dezenas de milhares de membros com essa finalidade, mesmo sem recursos de localização. Há postagens constantes nos feeds perguntando quem mora próximo. De forma bem ineficiente.
        </p>
        <p>
          Um sistema próprio para isso pode:
        </p>
        <ul>
          <li>
            Filtrar resultados por localização e tipo de planta
          </li>
          <li>
            Notificar quando alguma planta próxima estiver disponível
          </li>
          <li>
            Exibir feedback de confiabilidade
          </li>
          <li>
            Manter uma lista pública de plantas que a pessoa esteja procurando
          </li>
        </ul>
      </ProjectDetails>

      <Tools names={[
        'nextjs',
        'react',
        'express',
        'nodejs',
        'typescript',
        'postgresql',
        's3',
        'socketio',
      ]}
      />
    </ProjectSection>
  );
}
