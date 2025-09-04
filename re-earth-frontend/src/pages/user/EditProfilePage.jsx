import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProfileLayout from '@/components/layout/ProfileLayout'
import './EditProfilePage.scss'

const EditProfilePage = () => {
   const user = useSelector((state) => state.auth.user)
   const dispatch = useDispatch()

   const [formData, setFormData] = useState({
      nickname: user?.nickname || '',
      email: user?.email || '',
      newPassword: '',
      confirmPassword: '',
      bio: user?.bio || '',
   })

   const [previewImage, setPreviewImage] = useState(user?.profileImage || '')

   const handleImageChange = (e) => {
      const file = e.target.files[0]
      if (file) {
         const reader = new FileReader()
         reader.onloadend = () => {
            setPreviewImage(reader.result)
         }
         reader.readAsDataURL(file)
      }
   }

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // TODO: Dispatch update profile action
   }

   return (
      <ProfileLayout>
         <div className="edit-profile">
            <h2 className="section-title">프로필 수정</h2>

            <div className="profile-form card">
               <form onSubmit={handleSubmit}>
                  {/* 프로필 이미지 섹션 */}
                  <div className="image-section">
                     <div className="preview">
                        <img src={previewImage || '/default-avatar.png'} alt="Profile Preview" />
                     </div>
                     <div className="upload-btn">
                        <label htmlFor="profile-image" className="btn btn-point">
                           이미지 변경
                        </label>
                        <input type="file" id="profile-image" accept="image/*" onChange={handleImageChange} hidden />
                     </div>
                  </div>

                  {/* 입력 필드 */}
                  <div className="form-group">
                     <label>닉네임</label>
                     <input type="text" name="nickname" value={formData.nickname} onChange={handleInputChange} className="form-control" />
                  </div>

                  <div className="form-group">
                     <label>이메일</label>
                     <input type="email" value={formData.email} disabled className="form-control disabled" />
                  </div>

                  <div className="form-group">
                     <label>새 비밀번호</label>
                     <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className="form-control" />
                  </div>

                  <div className="form-group">
                     <label>비밀번호 확인</label>
                     <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="form-control" />
                  </div>

                  <div className="form-group">
                     <label>자기소개</label>
                     <textarea name="bio" value={formData.bio} onChange={handleInputChange} className="form-control" rows="4" />
                  </div>

                  {/* 버튼 그룹 */}
                  <div className="button-group">
                     <button type="submit" className="btn btn-primary">
                        저장하기
                     </button>
                     <button type="button" className="btn btn-text">
                        취소
                     </button>
                  </div>
               </form>
            </div>

            {/* 보조 정보 카드 */}
            <div className="info-card card">
               <div className="info-item">
                  <i className="fas fa-coins"></i>
                  <div className="info-content">
                     <label>누적 포인트</label>
                     <span className="value">{user?.totalPoints || 0} P</span>
                  </div>
               </div>
               <div className="info-item">
                  <i className="fas fa-leaf"></i>
                  <div className="info-content">
                     <label>이번 달 탄소 절감</label>
                     <span className="value">{user?.monthlyCarbon || 0} kg CO₂</span>
                  </div>
               </div>
            </div>
         </div>
      </ProfileLayout>
   )
}

export default EditProfilePage
