'use client'

import * as Yup from 'yup'

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'

import React from 'react'
import AnimatedShinyText from '../../news/components/ShineText'

interface FormValues {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	message: string
	privacyPolicy: boolean
}

const ContactForm: React.FC = () => {
	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
		privacyPolicy: false
	}

	const validationSchema = Yup.object({
		firstName: Yup.string().required('Bu alanın doldurulması gerekir'),
		lastName: Yup.string().required('Bu alanın doldurulması gerekir'),
		email: Yup.string().email('Geçerli bir e-posta adresi giriniz').required('Bu alanın doldurulması gerekir'),
		phoneNumber: Yup.string()
			.matches(/^\+90\s5\d{2}\s\d{3}\s\d{2}\s\d{2}$/, 'Geçerli bir telefon numarası giriniz')
			.required('Bu alanın doldurulması gerekir'),
		message: Yup.string().required('Bu alanın doldurulması gerekir'),
		privacyPolicy: Yup.boolean().oneOf([true], "Gizlilik Politikası'nı kabul etmelisiniz")
	})

	const onSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
		setSubmitting(true)
		try {
			const response = await fetch('/api/contact/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})
			console.log('values:', values)

			if (response.ok) {
				console.log('response ok :', response)
			} else {
				const errorData = await response.json()

				console.log('response not ok:', response)
			}
		} catch (error) {
			console.log('error:', error)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div className="flex flex-col min-h-screen pt-10 px-4 bg-base-200">
			<div className="container mx-auto max-w-5xl flex-grow flex flex-col lg:flex-row items-center justify-center gap-8">
				<div className="w-full lg:w-2/3 max-w-3xl">
					<div className="flex flex-col items-center justify-center mb-4">
						<h1 className="text-4xl font-bold mb-4">
							<AnimatedShinyText>Bize Ulaşın</AnimatedShinyText>
						</h1>
						<p className="text-lg">Email: iletisim@gmail.com.tr</p>
					</div>

					<div className="card shadow-2xl bg-base-100">
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
							{({ isSubmitting }) => (
								<Form className="card-body">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="form-control">
											<label className="label" htmlFor="firstName">
												<span className="label-text">Adınız</span>
											</label>
											<Field name="firstName" type="text" placeholder="Ad" className="input input-bordered" />
											<ErrorMessage name="firstName" component="div" className="text-error text-sm mt-1" />
										</div>
										<div className="form-control">
											<label className="label" htmlFor="lastName">
												<span className="label-text">Soyadınız</span>
											</label>
											<Field name="lastName" type="text" placeholder="Soyad" className="input input-bordered" />
											<ErrorMessage name="lastName" component="div" className="text-error text-sm mt-1" />
										</div>
									</div>
									<div className="form-control">
										<label className="label" htmlFor="email">
											<span className="label-text">E-posta Adresiniz</span>
										</label>
										<Field name="email" type="email" placeholder="ornek@mail.com" className="input input-bordered" />
										<ErrorMessage name="email" component="div" className="text-error text-sm mt-1" />
									</div>
									<div className="form-control">
										<label className="label" htmlFor="phoneNumber">
											<span className="label-text">Telefon Numaranız</span>
										</label>
										<Field
											name="phoneNumber"
											type="tel"
											placeholder="+90 5XX XXX XX XX"
											className="input input-bordered"
										/>
										<ErrorMessage name="phoneNumber" component="div" className="text-error text-sm mt-1" />
									</div>
									<div className="form-control">
										<label className="label" htmlFor="message">
											<span className="label-text">Mesajınız</span>
										</label>
										<Field
											name="message"
											as="textarea"
											placeholder="Mesajınızı buraya yazın"
											className="textarea textarea-bordered h-24"
										/>
										<ErrorMessage name="message" component="div" className="text-error text-sm mt-1" />
									</div>
									<div className="form-control">
										<label className="label cursor-pointer justify-start items-center gap-2">
											<Field type="checkbox" name="privacyPolicy" className="checkbox checkbox-sm" />
											<span className="label-text">Gizlilik Politikası'nı Okudum ve Anladım</span>
										</label>
										<ErrorMessage name="privacyPolicy" component="div" className="text-error text-sm mt-1" />
									</div>
									<div className="form-control mt-6">
										<button type="submit" disabled={isSubmitting} className="btn btn-primary">
											{isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
// +90 532 123 45 67
// +90 505 987 65 43
// +90 555 234 56 78
// +90 542 345 67 89
// +90 530 456 78 90
