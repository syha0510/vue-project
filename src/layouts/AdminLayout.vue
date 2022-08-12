<template>

        <el-container>
            <el-header style=" font-size: 12px">
                <div class="left">
                    <router-link to="/"><img style="width: 40px;height:40px;margin-top: 22px; " src="../assets/images/logo.jpg"></router-link>
                </div>
                <div class="right">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-avatar :src="url"></el-avatar>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <router-link to="/user/1"><el-dropdown-item><i class="el-icon-user"></i>Thông tin tài khoản</el-dropdown-item></router-link>
                            <router-link to="/login"><el-dropdown-item> <i class="el-icon-s-home"></i> Đăng xuất</el-dropdown-item></router-link>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main style="padding: 0;">
                 <router-view></router-view>
            </el-main>
        </el-container>

</template>

<script>
export default {
    data(){
        return{
            url:"https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/288998043_3597989160437935_461868714903586141_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xM-8MLgyazAAX8HkxHO&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-EvoDv1rEzsiHMebL6K2HVOKq1dfptFF9rrY-4K4abOQ&oe=62F15F4A",
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-container{ 
        min-height: 100vh;
    }
     .el-header {
            background-color: #409EFF;
            color: #333;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                text-align: left;
                 margin-right: 10px;
                    color: white;
            }
            .left{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
            }
            .right{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .item {
                    font-size: 25px;
                    width: 30px;
                    vertical-align: baseline;
                    height: 30px;
                    margin-right: 50px;
                    position: relative;
               
                i{
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                .el-badge__content.is-fixed {
                    position: absolute !important;
                    top: 20px;
                    right: 10px;
                    transform: translateY(-50%) translateX(100%);
                }
            }
            .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
                display: flex;
                align-items: center;
            }
            
            }
           
        }
    a{
        text-decoration: none;
    }
        
</style>