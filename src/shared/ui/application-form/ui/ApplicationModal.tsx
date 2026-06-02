'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useController, useForm } from 'react-hook-form'

import { Button } from '@shared/ui/button'
import { LogoSvg } from '@shared/ui/icon'
import { Input } from '@shared/ui/input'
import { Select } from '@shared/ui/select'

import { createApplicationSchema, type ApplicationFormInput } from '../model/schema'
import styles from './ApplicationModal.module.scss'

interface ApplicationModalProps {
  isOpen: boolean
  onCloseAction: () => void
}

const CONTACT_OPTIONS = [
  { value: 'telegram', label: 'Telegram' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
]

export function ApplicationModal({
                                   isOpen,
                                   onCloseAction,
                                 }: ApplicationModalProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const t = useTranslations('applicationForm')

  const schema = createApplicationSchema({
    nameMin: t('validation.nameMin'),
    contactMethodRequired: t('validation.contactMethodRequired'),
    contactMin: t('validation.contactMin'),
    contactInvalidEmail: t('validation.contactInvalidEmail'),
    contactInvalidTelegram: t('validation.contactInvalidTelegram'),
    contactInvalidPhone: t('validation.contactInvalidPhone'),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      contactMethod: '',
      contact: '',
    },
  })

  const { field: contactMethodField } = useController({
    control,
    name: 'contactMethod',
  })

  const handleClose = () => {
    onCloseAction()
    setIsSuccess(false)
    reset()
  }

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const onSubmit = () => {
    setIsSuccess(true)
  }

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label={t('close')}
        >
          X
        </button>

        {isSuccess ? (
          <div className={styles.success}>
            <LogoSvg className={styles.logo} width={56} height={51} />

            <p className={styles.successTitle}>{t('success.title')}</p>

            <p className={styles.successText}>
              {t('success.text').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </p>

            <Button
              type="button"
              className={styles.doneButton}
              onClick={handleClose}
            >
              {t('done')}
            </Button>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <LogoSvg className={styles.logo} width={56} height={52} />

            <p className={styles.formHint}>
              {t('hintStartPart')}
              <span className={styles.formHintMark}>{t('hintMark')}</span>
              {t('hintEndPart')}
            </p>

            <div className={styles.fields}>
              <Input
                id="app-name"
                label={t('fields.namePlaceholder')}
                autoComplete="name"
                error={errors.name?.message}
                {...register('name')}
              />

              <div className={styles.contactRow}>
                <Select
                  className={styles.selectField}
                  options={CONTACT_OPTIONS}
                  value={contactMethodField.value}
                  onChange={contactMethodField.onChange}
                  placeholder={t('fields.contactMethodPlaceholder')}
                  required
                  error={errors.contactMethod?.message}
                />

                <Input
                  id="app-contact"
                  className={styles.contactField}
                  label={t('fields.contactPlaceholder')}
                  required
                  error={errors.contact?.message}
                  {...register('contact')}
                />
              </div>
            </div>

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}