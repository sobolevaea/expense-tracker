import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { addExpense } from '../store/expensesSlice.js'
import { CATEGORIES, getCategoriesIds } from '../constants/categories.js'

const renderOption = ({ id, name }) => <option key={id} value={id}>{name}</option>

const ExpenseForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const categoriesIds = getCategoriesIds()

  const validationSchema = yup.object({
    sum: yup.number()
      .required(t('errors.enterSum'))
      .positive(t('errors.bePositive')),
    category: yup.string()
      .required(t('errors.chooseCategory'))
      .oneOf(categoriesIds, t('errors.chooseCategory')),
    description: yup.string()
      .required(t('errors.enterDescription'))
      .min(3, t('errors.min3Symbols')),
    date: yup.string()
      .required(t('errors.chooseDate'))
      .test(
        'not-in-future',
        t('errors.notInFuture'),
        (value) => {
          if (!value) return false
          const today = new Date().toLocaleDateString('sv-SE')
          return value <= today
        }),
  })

  const sumInputRef = useRef()

  const formik = useFormik({
    initialValues: { sum: '', category: '', description: '', date: '' },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      try {
        dispatch(addExpense(values))
        formik.resetForm()
        sumInputRef.current.focus()
      }
      catch (error) {
        console.error(`${t('errors.failedToAdd')} ${error.message}`)
      }
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} className='col-12'>
      <Form.Group className='mb-2'>
        <Form.Control
          isInvalid={formik.touched.sum && !!formik.errors.sum}
          ref={sumInputRef}
          type='number'
          name="sum"
          id="sum"
          placeholder={t('text.enterSum')}
          value={formik.values.sum}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          autoFocus
        />
        <label className="visually-hidden" htmlFor="sum">
          {t('text.enterSum')}
        </label>
        <Form.Control.Feedback type="invalid">
          {formik.errors.sum}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-2'>
        <Form.Select
          isInvalid={formik.touched.category && !!formik.errors.category}
          name="category"
          id="category"
          value={formik.values.category}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          aria-label={t('text.chooseCategory')}
        >
          <option value="">{t('text.chooseCategory')}</option>
          {CATEGORIES.map(renderOption)}
        </Form.Select>
        <label className="visually-hidden" htmlFor="category">
          {t('text.chooseCategory')}
        </label>
        <Form.Control.Feedback type="invalid">
          {formik.errors.category}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-2'>
        <Form.Control
          isInvalid={formik.touched.description && !!formik.errors.description}
          name="description"
          id="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={t('text.enterDescription')}
          value={formik.values.description}
        />
        <label className="visually-hidden" htmlFor="description">
          {t('text.enterDescription')}
        </label>
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-2'>
        <Form.Control
          name="date"
          id="date"
          type='date'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          max={new Date().toLocaleDateString('sv-SE')}
          value={formik.values.date}
          isInvalid={formik.touched.date && !!formik.errors.date}
        />
        <label className="visually-hidden" htmlFor="date">
          {t('text.enterDate')}
        </label>
        {formik.errors.date && (
          <div className="invalid-feedback">{formik.errors.date}</div>
        )}
      </Form.Group>
      <Button
        type="submit"
        className='mt-2 col-12'
        disabled={!formik.isValid}
      >{t('buttons.add')}</Button>
    </Form>
  )
}

export default ExpenseForm