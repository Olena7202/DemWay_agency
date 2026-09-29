import { serviceGroups, type ServiceGroup } from '../data/services'
import { useLocale } from '../i18n/locale'

type ServiceTabsProps = {
  group: ServiceGroup
  onChange: (group: ServiceGroup) => void
}

export function ServiceTabs({ group, onChange }: ServiceTabsProps) {
  const { t } = useLocale()
  return (
    <div className="service-tabs" role="tablist" aria-label={t.catalog.tabsAria}>
      {serviceGroups.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={group === item}
          className={`service-tab${group === item ? ' service-tab--active' : ''}`}
          onClick={() => onChange(item)}
        >
          {t.groups[item]}
        </button>
      ))}
    </div>
  )
}
