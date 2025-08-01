import { GameInfo } from 'common/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import useGlobalState from 'frontend/state/GlobalStateV2'

interface Props {
  gameInfo: GameInfo
}

const ReportIssue = ({ gameInfo }: Props) => {
  const { t } = useTranslation('gamepage')
  const { openGameLogsModal } = useGlobalState.keys('openGameLogsModal')
  const showReportIssue =
    gameInfo.is_installed && gameInfo.install.platform !== 'Browser'

  if (!showReportIssue) {
    return null
  }

  return (
    <span
      onClick={() => openGameLogsModal(gameInfo)}
      className="clickable reportProblem"
      role={'button'}
    >
      <>
        {<FontAwesomeIcon icon={faTriangleExclamation} />}
        {t('report_problem', 'Report a problem running this game')}
      </>
    </span>
  )
}

export default ReportIssue
