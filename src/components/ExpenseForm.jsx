import cn from 'classnames'
import Button from 'react-bootstrap/Button'
import { useFormik } from 'formik'
import { object, number, string } from 'yup'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { CATEGORIES, getCategoriesNames } from '../constants/categories.js'

const renderOption = ({ id, name }) => <option key={id} value={id}>{name}</option>

const ExpenseForm = () => {
    const { t } = useTranslation()
   /*  const dispatch = useDispatch()
  
   */
  const categoriesNames = getCategoriesNames()

  const validationSchema = object({
        sum: number()
          .min(3, t('errors.from3to20Symbols'))
          .max(20, t('errors.from3to20Symbols')),
        category: string()
          .oneOf(categoriesNames, t('errors.mustBeUnique')),
        /* description,
        date, */
  })

  const formik = useFormik({
    initialValues: { sum: '', category: '', description: '', date: '' },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      try {
        console.log(values)
        formik.resetForm()
      }
      catch (error) {
        console.error(`Failed to add channel: ${error.message}`)
      }
    },
  })

  const sharedClasses = 'mb-2 form-control'

  const sumClass = cn(sharedClasses, {
    'is-invalid': formik.errors.sum,
  })

  const categoryClass = cn(sharedClasses, 'form-select', {
    'is-invalid': formik.errors.category,
  })

  const descriptionClass = cn(sharedClasses, {
    'is-invalid': formik.errors.description,
  })

  const dateClass = cn(sharedClasses, {
    'is-invalid': formik.errors.date,
  })

  return (
    <form onSubmit={formik.handleSubmit} className='col-12'>
      <div>
        <input
          name="sum"
          id="sum"
          type='number'
          className={sumClass}
          onChange={formik.handleChange}
          placeholder='Введите сумму'
          value={formik.values.sum}
          autoFocus
        />
        <label className="visually-hidden" htmlFor="sum">
          Введите сумму
        </label>
        {formik.errors.sum && (
          <div className="invalid-feedback">{formik.errors.sum}</div>
        )}
      </div>
      <div>
        <select className={categoryClass} name="category" id="category" aria-label="Выберите категорию">
          <option defaultValue>Выберите категорию</option>
          {CATEGORIES.map(category => renderOption(category))}
        </select>
        <label className="visually-hidden" htmlFor="category">
          Выберите категорию
        </label>
        {formik.errors.category && (
          <div className="invalid-feedback">{formik.errors.category}</div>
        )}
      </div>
      <div>
        <input
          name="description"
          id="description"
          className={descriptionClass}
          onChange={formik.handleChange}
          placeholder='На что потратили?'
          value={formik.values.description}
        />
        <label className="visually-hidden" htmlFor="description">
          На что потратили?
        </label>
        {formik.errors.description && (
          <div className="invalid-feedback">{formik.errors.description}</div>
        )}
      </div>
      <div>
        <input
          name="date"
          id="date"
          type='date'
          className={dateClass}
          onChange={formik.handleChange}
          placeholder='—'
          value={formik.values.date}
        />
        <label className="visually-hidden" htmlFor="date">
          Введите дату
        </label>
        {formik.errors.date && (
          <div className="invalid-feedback">{formik.errors.date}</div>
        )}
      </div>
      <Button className='mt-2 col-12' type="submit">Добавить</Button>
    </form>
  )
}

export default ExpenseForm