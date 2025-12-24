import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

import { addExpense } from '../store/expensesSlice.js'
import { CATEGORIES, getCategoriesIds } from '../constants/categories.js'
import { selectExpensesItems } from '../store/expensesSlice.js'

const renderOption = ({ id, name }) => <option key={id} value={id}>{name}</option>

const ExpenseForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const expenses = useSelector(selectExpensesItems)


  const categoriesIds = getCategoriesIds()

  const validationSchema = yup.object({
    sum: yup.number()
      .required('Введите сумму')
      .positive('Сумма должна быть больше 0'),
    category: yup.string()
      .required('Выберите категорию')
      .oneOf(categoriesIds, 'Выберите категорию'),
    description: yup.string()
      .required('Введите описание')
      .min(3, 'Минимум 3 символа'),
    date: yup.string()
      .required('Выберите дату')
      .test(
        'not-in-future',
        'Дата не может быть в будущем',
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
        // добавление траты
        dispatch(addExpense(values))
        
        console.log(expenses)
        formik.resetForm()
        sumInputRef.current.focus()
      }
      catch (error) {
        console.error(`Failed to add expense: ${error.message}`)
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
          placeholder='Введите сумму'
          value={formik.values.sum}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          autoFocus
        />
        <label className="visually-hidden" htmlFor="sum">
          Введите сумму
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
          aria-label="Выберите категорию"
        >
          <option value="">Выберите категорию</option>
          {CATEGORIES.map(renderOption)}
        </Form.Select>
        <label className="visually-hidden" htmlFor="category">
          Выберите категорию
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
          placeholder='На что потратили?'
          value={formik.values.description}
        />
        <label className="visually-hidden" htmlFor="description">
          На что потратили?
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
          Введите дату
        </label>
        {formik.errors.date && (
          <div className="invalid-feedback">{formik.errors.date}</div>
        )}
      </Form.Group>
      <Button
        type="submit"
        className='mt-2 col-12'
        disabled={!formik.isValid}
      >Добавить</Button>
    </Form>
  )
}

export default ExpenseForm